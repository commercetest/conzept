import { IsDefined } from '../engine/core/core.js';
import { AddDiv, CreateDiv, ShowDomElement, ClearDomElement, InsertDomElementBefore, InsertDomElementAfter } from '../engine/viewer/domutils.js';
import { CreateSvgIconElement, SetSvgIconImageElement } from './utils.js';

export function ScrollToView(element)
{
    element.scrollIntoView ({
        behavior : 'smooth',
        block : 'nearest'
    });

}

export class TreeViewButton
{
    constructor (imagePath)
    {
        this.imagePath = imagePath;
        this.mainElement = CreateSvgIconElement (this.imagePath, 'ov_tree_item_button');
        this.mainElement.setAttribute ('src', this.imagePath);
    }

    SetImage (imagePath)
    {
        this.imagePath = imagePath;
        SetSvgIconImageElement (this.mainElement, this.imagePath);
    }

    OnClick (clickHandler)
    {
        this.mainElement.addEventListener ('click', (ev) => {
            ev.stopPropagation ();
            clickHandler (ev);
        });
    }

    GetDomElement ()
    {
        return this.mainElement;
    }
}

export class TreeViewItem
{
    constructor (name, icon)
    {
        this.name = name;
        this.parent = null;
        this.mainElement = CreateDiv ('ov_tree_item');
        this.mainElement.setAttribute ('title', this.name);

        // CONZEPT PATCH
        let qid         = '';
        let label       = '';
        let annotation  = '';

        if ( valid( name ) ){

          qid   = isQid( name.split('.')[0] )? name.split('.')[0] : '';
          label = name.split('.')[0];

        }
        else {

          console.log( 'invalid name: ', name );
          name = '---';
          
        }

        if ( valid( qid ) ){ // Qid

          const annotation  = name.split('.')[1] || '';

          this.mainElement.setAttribute ( 'id', qid );
          this.mainElement.setAttribute ( 'data-qid', qid );
          this.mainElement.setAttribute ( 'data-annotation', annotation );

          // - command-line tool to create:
          //  - a translation-file for each Wikipedia language
          //    - template file: put all found Qids into an array of objects

          /*

              const anatomy_labels = {
                "Q9633": {
                  "label": "Neck",
                },

          */

          //    - translate_qids.js <language> <template-JSON-file>
          //  - store in assets/i18n/special/human_anatomy
          this.mainElement.setAttribute ( 'data-label', '' ); // TODO: lookup in translation-JSON-file

          // TODO: plan to use the translated "label" (instead of "this.name")
          this.nameElement = AddDiv (this.mainElement, 'ov_tree_item_name', this.name);

          this.nameElement.setAttribute ( 'id', qid );
          this.nameElement.setAttribute ( 'data-qid', qid );
          this.nameElement.setAttribute ( 'data-label', label );
          this.nameElement.setAttribute ( 'data-annotation', annotation );

        }
        else { // string

          const annotation  = name.split('.')[0] || '';

          this.mainElement.setAttribute ( 'id', '' );
          this.mainElement.setAttribute ( 'data-qid', '' );
          this.mainElement.setAttribute ( 'data-annotation', annotation );
          this.mainElement.setAttribute ( 'data-label', label ); // TODO: Improve Wikidata-data, so the Qid can be set

          // TODO: plan to use the translated "label" (instead of "this.name")
          this.nameElement = AddDiv (this.mainElement, 'ov_tree_item_name', this.name);

          this.nameElement.setAttribute ( 'id', qid );
          this.nameElement.setAttribute ( 'data-qid', qid );
          this.nameElement.setAttribute ( 'data-label', label );
          this.nameElement.setAttribute ( 'data-annotation', annotation );

        }
        //console.log( qid, label );
  

        if (IsDefined (icon)) {
            let iconElement = CreateSvgIconElement (icon, 'ov_tree_item_icon');
            InsertDomElementBefore (iconElement, this.nameElement);
        }

    }

    OnClick (onClick)
    {
        this.mainElement.classList.add ('clickable');
        this.mainElement.style.cursor = 'pointer';
        this.mainElement.addEventListener ('click', onClick);
    }

    SetParent (parent)
    {
        this.parent = parent;
    }

    AddDomElements (parentDiv)
    {
        parentDiv.appendChild (this.mainElement);
    }
}

export class TreeViewSingleItem extends TreeViewItem
{
    constructor (name, icon)
    {
        super (name, icon);
        this.selected = false;
    }

    SetSelected (selected)
    {
        this.selected = selected;
        if (this.selected) {

            this.mainElement.classList.add ('selected');
            let parent = this.parent;
            if (parent === null) {
                ScrollToView (this.mainElement);
            } else {
                while (parent !== null) {
                    parent.ShowChildren (true);
                    ScrollToView (this.mainElement);
                    parent = parent.parent;
                }
            }

            // CONZEPT PATCH
            //console.log( 'label: ', this.mainElement.textContent, getParameterByName('ta98'), getParameterByName('qid')  ); // leaf-element
            const qid    = this.mainElement.getAttribute('data-qid');
            //const qid     = isQid( this.mainElement.textContent.split('.')[0] )? this.mainElement.textContent.split('.')[0] : '';
            const label  = this.mainElement.getAttribute('data-label');
            //const label   = this.mainElement.textContent.split('.')[0];

            console.log( qid, label );

            if ( valid( qid ) ){ // Qid

              openInFrame( `/app/wikipedia/?t=&l=${ getParameterByName('l') }&qid=${qid}&embedded=#` );

            }
            else { // string
              openInFrame( `/app/wikipedia/?t=${ encodeURIComponent( label ) }&l=${ getParameterByName('l') }&qid=&embedded=#` );
            }

        } else {
            this.mainElement.classList.remove ('selected');
        }
    }
}

export class TreeViewButtonItem extends TreeViewSingleItem
{
    constructor (name, icon)
    {
        super (name, icon);
        this.buttonsDiv = CreateDiv ('ov_tree_item_button_container');
        InsertDomElementBefore (this.buttonsDiv, this.nameElement);
    }

    AppendButton (button)
    {
        this.buttonsDiv.appendChild (button.GetDomElement ());
    }
}

export class TreeViewGroupItem extends TreeViewItem
{
    constructor (name, icon)
    {
        super (name, icon);
        this.children = [];
        this.isVisible = true;
        this.isChildrenVisible = false;

        this.childrenDiv = null;
        this.openButtonIcon = 'arrow_down';
        this.closeButtonIcon = 'arrow_right';

        this.openCloseButton = CreateSvgIconElement (this.openButtonIcon, 'ov_tree_item_icon');
        InsertDomElementBefore (this.openCloseButton, this.nameElement);

    }

    AddChild (child)
    {
        this.CreateChildrenDiv ();
        this.children.push (child);
        child.SetParent (this);
        child.AddDomElements (this.childrenDiv);
    }

    ExpandAll (expand)
    {
        for (let child of this.children) {
            if (child instanceof TreeViewGroupItem) {
                child.ShowChildren (expand);
                child.ExpandAll (expand);
            }
        }
    }

    Show (show)
    {
        this.isVisible = show;
        if (this.childrenDiv === null) {
            return;
        }
        if (this.isVisible) {
            ShowDomElement (this.mainElement, true);
            this.childrenDiv.classList.add ('ov_tree_view_children');
        } else {
            ShowDomElement (this.mainElement, false);
            this.childrenDiv.classList.remove ('ov_tree_view_children');
        }
    }

    ShowChildren (show)
    {
        this.isChildrenVisible = show;
        if (this.childrenDiv === null) {
            return;
        }
        if (show) {
            SetSvgIconImageElement (this.openCloseButton, this.openButtonIcon);
            ShowDomElement (this.childrenDiv, true);
        } else {
            SetSvgIconImageElement (this.openCloseButton, this.closeButtonIcon);
            ShowDomElement (this.childrenDiv, false);
        }
    }

    CreateChildrenDiv ()
    {
        if (this.childrenDiv === null) {
            this.childrenDiv = CreateDiv ('ov_tree_view_children');
            InsertDomElementAfter (this.childrenDiv, this.mainElement);
            this.Show (this.isVisible);
            this.ShowChildren (this.isChildrenVisible);
            this.OnClick ((ev) => {

                this.isChildrenVisible = !this.isChildrenVisible;
                this.ShowChildren (this.isChildrenVisible);

                // CONZEPT PATCH

                const qid    = this.mainElement.getAttribute('data-qid');
                //const qid     = isQid( this.mainElement.textContent.split('.')[0] )? this.mainElement.textContent.split('.')[0] : '';

                const label  = this.mainElement.getAttribute('data-label');
                //const label   = this.mainElement.textContent.split('.')[0];

                console.log( qid, label );

                if ( isQid( qid ) ){ // Qid
                  openInFrame( `/app/wikipedia/?t=&l=${ getParameterByName('l') }&qid=${qid}&embedded=#` );
                }
                else { // string
                  openInFrame( `/app/wikipedia/?t=${ encodeURIComponent( label ) }&l=${ getParameterByName('l') }&qid=&embedded=#` );
                }

            });
        }
        return this.childrenDiv;
    }
}

export class TreeViewGroupButtonItem extends TreeViewGroupItem
{
    constructor (name, icon)
    {
        super (name, icon);
        this.buttonsDiv = CreateDiv ('ov_tree_item_button_container');
        InsertDomElementBefore (this.buttonsDiv, this.nameElement);
    }

    AppendButton (button)
    {
        this.buttonsDiv.appendChild (button.GetDomElement ());
    }
}

export class TreeView
{
    constructor (parentDiv)
    {
        this.mainDiv = AddDiv (parentDiv, 'ov_tree_view');
        this.children = [];
    }

    AddClass (className)
    {
        this.mainDiv.classList.add (className);
    }

    AddChild (child)
    {
        child.AddDomElements (this.mainDiv);
        this.children.push (child);
    }

    Clear ()
    {
        ClearDomElement (this.mainDiv);
        this.children = [];
    }
}

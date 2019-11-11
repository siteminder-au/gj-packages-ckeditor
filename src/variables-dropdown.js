
import { addListToDropdown, createDropdown } from '@ckeditor/ckeditor5-ui/src/dropdown/utils';
import ButtonView from '@ckeditor/ckeditor5-ui/src/dropdown/button/buttonview';
import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import Model from '@ckeditor/ckeditor5-ui/src/model';
import Collection from '@ckeditor/ckeditor5-utils/src/collection';

export default class InsertDropDownPlugin extends Plugin {
	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add('variablesDropdown', locale => {
			const dropdownView = createDropdown(locale, ButtonView);
			const items = new Collection();

			dropdownView.buttonView.set({
				withText: true,
				label: 'Variables',
			});

			items.add( {
				type: 'button',
				model: new Model( {
					withText: true,
					label: 'Foo'
				} )
			} );
			items.add( {
				type: 'button',
				model: new Model( {
					withText: true,
					label: 'Bar'
				} )
			} );

			addListToDropdown( dropdownView, items );

			return dropdownView;
		});
	}
}

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import plainTextToHtml from '@ckeditor/ckeditor5-clipboard/src/utils/plaintexttohtml';

export default class ForcePastePlainText extends Plugin {
    static get pluginName() {
        return 'ForcePastePlainText'
    }

    init() {
        const editor = this.editor;

		const isEnabled = !! editor.config.get('forcePasteAsPlainText');

        // The logic responsible for converting HTML to plain text.
        const editingView = editor.editing.view;

        editingView.document.on('clipboardInput', (evt, data) => {
            if (editor.isReadOnly || !isEnabled) {
                return;
            }

            const dataTransfer = data.dataTransfer;
            let content = plainTextToHtml(dataTransfer.getData('text/plain'));

            data.content = this.editor.data.htmlProcessor.toView(content);
        });
    }
};

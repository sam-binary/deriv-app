import { lazy } from 'react';
import { translate } from '../../../utils/lang/i18n';

Blockly.Blocks.math_number = {
    init() {
        this.jsonInit(this.definition());

        const fieldInput = this.getField('NUM');
        fieldInput.setValidator(input => this.numberValidator(input));
    },
    definition(){
        return {
            message0: '%1',
            args0   : [
                {
                    type : 'field_number',
                    name : 'NUM',
                    value: 0,
                },
            ],
            output         : 'Number',
            outputShape    : Blockly.OUTPUT_SHAPE_ROUND,
            colour         : '#dedede',
            colourSecondary: '#ffffff',
            colourTertiary : '#ffffff',
            tooltip        : translate('Math Number Tooltip'),
            category       : Blockly.Categories.Mathematical,
        };
    },
    meta(){
        return {
            'display_name': translate('Math Number'),
            'description' : translate('Math Number Decscription'),
        };
    },
    numberValidator(input) {
        if (/^-?([0][,.]|[1-9]+[,.])?([0]|[1-9])*$/.test(input)) {
            return undefined;
        }
        return null;
    },
    helpContent: () => lazy(() => import('../../help-components/Math/math_number.jsx')),
};

Blockly.JavaScript.math_number = block => {
    const code = block.getFieldValue('NUM');
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

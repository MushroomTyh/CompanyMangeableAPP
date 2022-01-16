import React from 'react';
import PropTypes from 'prop-types';

/**
 * screen mask, use in `Dialog`, `ActionSheet`, `Popup`.
 *
 */
class Mask extends React.Component {
    static propTypes = {
        /**
         * Whather mask should be transparent (no color)
         *
         */
        transparent: PropTypes.bool
    };

    static defaultProps = {
        transparent: false
    };

    render() {
        const {transparent, className, ...others} = this.props;
        const clz = `
            ${!transparent && 'weui-mask'} 
            ${transparent && 'weui-mask_transparent'} 
            ${className}
        `

        return (
            <div className={clz} {...others}></div>
        );
    }
}

export default Mask;

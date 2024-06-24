import styles from '../Button/Button.module.scss';
import { Link } from 'react-router-dom';
function Button({ to, href, primary, children, onClick }) {
    console.log(onClick);
    let Comp = 'button';
    const classes = styles.wrapper;
    const props = {};
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;

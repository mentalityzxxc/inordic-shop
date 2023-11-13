import './style.css';

export function Button({hadlerClick, text, size}) {

    const style = {
        'fontSize': size
    }

    return (
        <button style={style} className="banner__button" onClick={hadlerClick}>
            {text}
        </button>
    )
} 
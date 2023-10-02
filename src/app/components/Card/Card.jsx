import Button from "../Button/Button"
import ui from "./Card.module.scss"

const Card = ({ note, title, logo, description, image, onClick, className, flip=false, tag:Tag }) => {
    let props = flip ? {tabIndex: 0} : {}
    function unfocus(e) {
        e.target.blur()
    }

    return (
        <Tag className={`${ui["__wrap"]} ${className}`} data-flip={flip} {...props}>
            <figure className={ui["__figure"]}>
                <img className={ui["__image"]} src={image} alt={logo ? '' : title} />
            </figure>
            <header className={ui["__header"]} >
                {note && <small className={ui["__note"]}>{note}</small>}
                {title && ( 
                    logo ? 
                    <img className={ui["__logo"]} src={logo} width={100} height={100} alt={`${title} Logo`} /> 
                    :
                    <h1 className={ui["__title"]}>{title}</h1>
                )}
            </header>
            <div className={ui["__content"]}>
                {description && <p className={ui["__text"]}>{description}</p>}
                {onClick && 
                    <Button
                        className={ui["__button"]}
                        type="primary"
                        onClick={() => onClick()} 
                        onMouseLeave={unfocus}
                    >
                        Explore more
                    </Button>}
            </div>
        </Tag>
    )
}

export default Card

export default function ButtonDark({text, target, icon="", blank="no"}){
    return(
        <a href={target} target={blank === "yes" ? "_blank" : "_self"}
        className="bg-bck-grey pt-4.5 pb-4 pl-6 pr-5 w-fit font-neraphic font-normal text-button text-text-lightBody rounded-md flex items-center">
            {text}
            {icon && <img src={icon} className="w-4 ml-3 mb-1 inline"/>}
        </a>
    )
}
interface IconProp {
    style?:{}
}

export default function Save (props:IconProp) {
    const {style} = props
    return (
        <>
            <div className="material-symbols-outlined" style={{...style}}>
                favorite
            </div>
        </>
    )
}
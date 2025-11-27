export default function Icon ({ type, src, alt, className }) {
    return (
        type === 'img' ? (
            <img src={src} alt={alt} className={className} />
        ) : (
            icon
        )
    )
}
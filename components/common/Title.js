export const TitleLogo = ({ title, caption, className }) => {
  return (
    <h1 className={`${className}  title-logo`}>
    {caption}
      {title}
    </h1>
  )
}

export const TitleSm = ({ title,caption }) => {
  return <h1 className='titleSm'>{title} {caption}</h1>
}
export const Title = ({ title, className }) => {
  return <h1 className={`${className} title`}>{title}</h1>
}

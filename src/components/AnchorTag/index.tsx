
export default function AnchorTag({
  children,
  hrefUrl,
  customClasses = '',
  ...props
}) {
  return (
    <a
      href={hrefUrl}
      target='_blank'
      rel='noreferrer'
      className={`no-underline ${customClasses}`}
      {...props}
    >
      {children}
    </a>
  )
}

import './index.css'

const ImageListItems = props => {
  const {imageDetails, onClickImageItem} = props
  const {image, id} = imageDetails
  const onClickImg = () => {
    onClickImageItem(image)
  }
  return (
    <li className="choicesItem">
      <button
        type="button"
        className="imgBtn"
        data-testid={`${id.toLowerCase()}Button`}
        onClick={onClickImg}
      >
        <img src={image} alt={id} className="choicesImg" />
      </button>
    </li>
  )
}
export default ImageListItems

import {MdDelete} from 'react-icons/md'
import './index.css'

const ListItem = props => {
  const {listItems, onDeleteItem} = props
  const {id, imageUrl, name, genre, duration} = listItems

  const deleteItem = () => {
    onDeleteItem(id)
  }
  return (
    <li className="items">
      <div className="conty">
        <img src={imageUrl} className="image" alt="track" />
        <div>
          <p className="para">{name}</p>
          <p className="para1">{genre}</p>
        </div>
      </div>
      <div className="conty">
        <p className="para">{duration}</p>
        <button
          className="btn"
          type="button"
          data-testid="delete"
          onClick={deleteItem}
        >
          {' '}
          <MdDelete className="icon" />
        </button>
      </div>
    </li>
  )
}

export default ListItem

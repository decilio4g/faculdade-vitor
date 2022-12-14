import { MediumCard } from '../../../components/mediumCard'
import './styles.css'

export function MediumCardList() {
    const listCards = [
        {
            name: 'Spider Man: The game',
            price: '150.00',
            image: '../../assets/635329.jpeg',
        },
        {
            name: 'Spider Man: The game',
            price: '150.00',
            image: '../../assets/635329.jpeg',
        },
        {
            name: 'Spider Man: The game',
            price: '150.00',
            image: '../../assets/635329.jpeg',
        }
    ]
    return (
        <div className='container-list-card-medium'>
            {listCards?.map((card, index) => {
                return (
                    <div className="card-list">
                        <MediumCard />
                    </div>
                )
            })}

        </div>
    )
}
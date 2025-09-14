import CustomerReview from '../customer-review/CustomerReview'
import Updates from '../updates/Updates'
import './RightPanel.css'

const RightPanel = () => {
    return (
        <div className='right-panel'>
            <div>
                <h3>Updates</h3>
                <Updates/>
            </div>
            <div>
                <h3>Customer Review</h3>
                <CustomerReview/>
            </div>
        </div>
    )
}
export default RightPanel
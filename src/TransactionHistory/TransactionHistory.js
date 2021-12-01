import PropTypes from "prop-types";
import s from '../TransactionHistory/TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
        <table className={s.table}>
        <thead>
                <tr className={s.line}>
                <th className={s.item}>Type</th>
                <th className={s.item}>Amount</th>
                <th className={s.item}>Currency</th>
            </tr>
        </thead>

        <tbody>
    
            {items.map(({ id, type, amount, currency }) => (
            
                <tr className={s.line} key={id}>
                    <td className={s.data}>{type}</td>
                    <td className={s.data}>{amount}</td>
                    <td className={s.data}>{currency}</td>
                </tr>
            ))}
        </tbody>
    </table>

    )
    };

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,   
       })
    )
   
};


    
    export default TransactionHistory;

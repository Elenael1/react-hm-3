import s from './StaticsItem.module.css'

export const StaticsItem = ({label, percentage}) => {
  return (
    <div className={s.stats}>
         {/* <li className={s.percentage}>{percentage}</li>
        <li className={s.label}>{label}</li>
         */}

      <tr>
      <th className={s.staticItemTh}> label</th>
      <th className={s.staticItemTh}>percentage</th>
    </tr>
    <tr>
    <td className={s.staticItemTd}>{label}</td>
      <td className={s.staticItemTd}>{percentage}</td>
    </tr>
    </div>
  )
}

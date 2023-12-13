import spin from '../assets/spinner.gif'

function Spinner() {
  return <img src={spin} alt='Loading...' style={{width: '100px', margin: 'auto', display: 'block'}}/>
}

export default Spinner

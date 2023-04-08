import { Link } from 'react-router-dom';
import picture from '../obi-wan.jpg';
export default function Error() {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>These are not the pages you are looking for</h1>
        <img src={picture} alt='' style={{ marginBottom: '2rem' }} />
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
      </div>
    </section>
  );
}

import Link from 'next/link';
import '../css/basic.css';

export default () => (
  <div>
    <h2>Examples</h2>
    <ol>
      <li>
        <b>Mini-Formik</b>:{' '}
        <Link href="/01-mini-formik">
          <a>Start</a>
        </Link>
        {' - '}
        <Link href="/01-mini-formik-final">
          <a>Finished</a>
        </Link>
      </li>
      <li>
        <b>Formik Kitchen Sink</b>:{' '}
        <Link href="/02-kitchen-sink">
          <a>Finished</a>
        </Link>
      </li>
      <li>
        <b>Arrays</b>:{' '}
        <Link href="/02-arrays">
          <a>Start</a>
        </Link>
        {' - '}
        <Link href="/02-array-final">
          <a>Finished</a>
        </Link>
      </li>
    </ol>
  </div>
);

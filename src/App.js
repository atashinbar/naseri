import banner from './images/naseri.jpg'
import './App.css'

function App() {
	return (
		<div className='App'>
			<div className='banner'>
				<a href='https://us06web.zoom.us/j/81718895832?pwd=ZlRRMXBJYVFQRFY5WWJVa0E2UW5Sdz09'>
					برای مشاهده آنلاین مراسم کلیک کنید
				</a>
				<strong>داشتن اکانت وب سایت zoom الزامی است</strong>
				<br />
				<strong>شروع مراسم ساعت ۱۵:۰۰ به وقت تهران</strong>
			</div>
			<div className='image'>
				<img src={banner} alt='logoo' />
			</div>
		</div>
	)
}

export default App

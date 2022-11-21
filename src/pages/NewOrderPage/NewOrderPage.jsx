import { useEffect, useState } from 'react'

export default function NewOrderPage() {
    const [menuProducts, setMenuProducts] = useState([])
    
    useEffect(function() {
        console.log('NewOrderPage rendered')
    })

    useEffect(function() {
        console.log('useEffect runs only after first render')
    }, [])

    useEffect(function() {
        console.log('useEffect runs when menuProducts changes')
    }, [menuProducts])

    return (
        <>
            <h1>NewOrderPage</h1>
            <button onClick={() => setMenuProducts(Date.now())}>Trigger Rerender</button>
        </>
    );
  }
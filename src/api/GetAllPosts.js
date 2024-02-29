async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }
   
  export default async function GetAllPosts() {
    const data = await getData()
    console.log('Posts =========> ', data)
    return <main></main>
  }


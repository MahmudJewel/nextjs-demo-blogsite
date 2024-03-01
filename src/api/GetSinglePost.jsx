export default async function GetSinglePost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
}

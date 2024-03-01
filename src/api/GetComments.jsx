export default async function GetComments(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
}

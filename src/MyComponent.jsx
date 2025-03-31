import 'bootstrap/dist/css/bootstrap.min.css';

function MyComponent() {
    const num = 10;
    let count=0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
            count++;
        }
    }
    return (
        <>
            {
                
                count== 2 ? (
                    <p className='text text-success'>{num} is a prime  number</p>
                ) : (
                    <p className='text text-danger'>{num} is not a prime number</p>
                )
            }
        </>
    )
}
export default MyComponent;
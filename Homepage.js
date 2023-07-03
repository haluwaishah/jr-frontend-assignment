export default function Homepage() {
    return (
        <div>
          Hello this is the main page
        </div>
    );
}

export async function getServerSideProps(ctx){


    return {
        props:{
            data:null
        }
    }
}

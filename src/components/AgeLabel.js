//rafce


const AgeLabel = ( {age} ) => {
    const styles = {
        border: "solid red 2px",
        padding: "15px",
        color: "red"
    }
    return (
            <span style={styles}> Edad: {age}</span>
    )
}

export default AgeLabel
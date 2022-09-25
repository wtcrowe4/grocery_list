const Spinner = () => {
    return (
    <div className="spinner-container"
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}
    >
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>

    )
}

export default Spinner;
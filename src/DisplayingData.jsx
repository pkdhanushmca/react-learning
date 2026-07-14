const user = {
    name: "Dhanush PK",
    imageUrl: './src/assets/dhanush.jpg',
    imageSize: 150
}

export default function DisplayingData() {

    return (
        <>
            <div className="img-container">
                <h1>{user.name}</h1>
                <img
                    src={user.imageUrl}
                    className="avatar"
                    style={{
                        width: user.imageSize,
                        height: user.imageSize
                    }}
                />
            </div>
        </>
    );
}
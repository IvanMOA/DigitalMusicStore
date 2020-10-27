const songs = [
    {title: "No problem", artist: "Chance", price: "5"},
    {title: "Baby", artist: "Justin Bieber", price: "15"},
    {title: "So long", artist: "Kate York", price: "10"},
    {title: "Shivers up my spine", artist: "A house", price: "5"},
    {title: "Anki", artist: "Adrift", price: "8"},
    {title: "Beam", artist: "Mako", price: "7"},
    {title: "Wake me up", artist: "Avicci", price: "2"},
    {title: "Bastille", artist: "Pompeii", price: "3"},
    {title: "Alive", artist: "Krewella", price: "12"},
    {title: "Hardwell", artist: "Apollo", price: "17"},
    {title: "Tremor", artist: "Dimitri", price: "9"},
    {title: "The new kings", artist: "Vicetone", price: "8"},
    {title: "How you love me", artist: "3LAU", price: "5"},
    {title: "Virus", artist: "Moti", price: "11"},
    {title: "Clarity", artist: "Zedd", price: "6"},
    {title: "Jackie Chan", artist: "Tiesto", price: "14"},
    {title: "Animals", artist: "Martin Garrix", price: "13"},
    {title: "Disarm You", artist: "Kaskade", price: "16"},
    {title: "Closer", artist: "Lemaitre", price: "3"},
    {title: "This is felicitas", artist: "K-391", price: "2"},
];


const FullTable = () => {
    const songRow = songs.map((song, index) => {
        return (
            <tr key={song.title}>
                <th scope="row">{index + 1}</th>
                <td>{song.title}</td>
                <td className="text-center">
                    <button
                        type="button"
                        className="btn"
                        data-toggle="tooltip"
                        id="songInfo1"
                        data-placement="right"
                        title={`${song.artist} | Price: ${song.price}`}
                    >
                        <i className="fas fa-info-circle text-warning"></i>
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <table className="table table-bordered border-warning">
            <thead>
                <tr>
                    <th colSpan="3">Top songs</th>
                </tr>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Song</th>
                    <th scope="col" className="text-center">
                        Info
                    </th>
                </tr>
            </thead>
            <tbody>{songRow}</tbody>
        </table>
    );
};

ReactDOM.render(<FullTable />, document.querySelector(".fullTableContainer"));

// Initializing bootstrap tooltips
var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

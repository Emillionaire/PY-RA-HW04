import moment from "moment";

const DataTable = ({value}: any) => {
    const data = Object.entries(value);
    delete data[0];

    const handleDelete = (event: any) => {
        event.preventDefault();
        event.target.remove();
      };
    
    return (
        <>
            <div>Дата --- Расстояние --- Удалить?</div>
            {data.map((el: any) => {
                return <form onSubmit={handleDelete}>{moment(el[0]*1000).format('DD.MM.YYYY')} --- {el[1]} --- <button type="submit">Удалить</button></form>
            })}
        </>
    );
};

export default DataTable;
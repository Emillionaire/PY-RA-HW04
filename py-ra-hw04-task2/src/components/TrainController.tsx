const TrainController = ({handleSubmit}: any) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="date">Дата (ДД.ММ.ГГГГ)</label>
            <input id="date" name="date"/>
            <label htmlFor="distance">Пройдено км (числом)</label>
            <input id="distance" name="distance"/>
            <button type="submit">ОК</button>
        </form>
    );
};

export default TrainController;
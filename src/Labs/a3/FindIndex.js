function FindFunction() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2', 'string3'];

    const four = numberArray1.findIndex(a => a === 4);
    const string3 = stringArray1.findIndex(a => a === 'string3');
    return(
        <>
        <h3>FindIndex Function</h3>
        fourIndex = {four} <br/>
        string3index = {string3} <br/></>
        )
}
export default FindFunction
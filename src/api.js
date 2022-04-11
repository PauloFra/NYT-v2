import axios from "axios";
// {section}.json?api-key=MtNvPePihFmABWskxQqc0uobSzMoeT1K

export default axios.create({
    baseURL:'https://api.nytimes.com/svc/topstories/v2/'
})
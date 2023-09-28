import React from 'react';



const PriceFilter = ({ price, setPrice }) => {
    const handleValue = (val) => {
        setPrice(val);
    }

    return (
        <div class="col-md-4 col-sm-12 col-xs-12 pull-right" style={{ marginBottom: "20px", paddingTop: "20px" }}>
            <div>
                <div className="filter-price">
                    <button id="price-btn1" style={price == "all" ? { background: "#6FC341", color: "#fff" } : {}}
                        onClick={() => handleValue("all")}>
                        همه
                    </button>
                    <button id="price-btn2" style={price == "purchase" ? { background: "#6FC341", color: "#fff" } : {}}
                        onClick={() => handleValue("purchase")}>
                        خریدنی
                    </button>
                    <button id="price-btn3" style={price == "free" ? { background: "#6FC341", color: "#fff" } : {}}
                        onClick={() => handleValue("free")}>
                        رایگان
                    </button>
                </div>
                <button id='special-member-btn' style={price == "special" ? { background: "#6FC341", color: "#fff" } : {}}
                    onClick={() => handleValue("special")}>
                    مخصوص اعضای ویژه
                </button>
            </div>
        </div >
    );
}

export default PriceFilter;
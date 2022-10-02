const React = require("react");
const DefaultLayout = require("./layouts/Default");

class IndexHome extends React.Component {
    render() {
        const { home } = this.props;
        return (

            <DefaultLayout title={""}>
                <div><h2>Welcome to Jud'ELECTRONICS! Get the highest quality at best price</h2></div>
                <div class="mainContainer">
                    <div class="pic1Container">
                        <img src="https://miro.medium.com/max/1400/0*R9GnXjOjKXi9LezM" alt=""
                            class="inView" />
                    </div>
                    <br /><br />

                    <div class="prodPicContainer">


                        <div class="prodPicBox">
                            <a href="/products/6336e07692f056ee09c12f15">
                            <img src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07961089.png"
                                alt=""
                                class="item" />
                            </a>

                            <div class="prodPicInfo">
                                <p class="title">Pavilion 15"<br />$549</p>
                            </div>
                        </div>

                        <div class="prodPicBox">
                        <a href="/products/6336e07692f056ee09c12f18">
                            <img src="https://images.samsung.com/is/image/samsung/au-ru7100-ua75ru7100wxxy-rperspectiveblack-152560930?$720_576_PNG$"
                                alt=""
                                class="item" />
                                </a>

                            <div class="prodPicInfo">
                                <p class="title">Samsung class 7 Series 75"<br />$1,250</p>
                            </div>
                        </div>

                        <div class="prodPicBox">
                        <a href="/products/6336e07692f056ee09c12f16">
                            <img src="https://cdn1-production-images-kly.akamaized.net/aXCAN7Icui3lkDiFWblRHAVZIy8=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3666794/original/077611000_1639367963-galaxy_S22_Ultra.jpg"
                                alt=""
                                class="item" />
                                </a>

                            <div class="prodPicInfo">
                                <p class="title">Galaxy s22 Ultra<br />$800</p>
                            </div>
                        </div>

                        <div class="prodPicBox">
                        <a href="/products/6336e07692f056ee09c12f17">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCaWRsOuzZgnAgdfkGKyRLjrsz_B3oTe1tJXecfyhZ5PXoql4XJi_tsePjMD6sg4R3ug&usqp=CAU"
                                alt=""
                                class="item" />
                                </a>

                            <div class="prodPicInfo">
                                <p class="title">Philips FX10<br />$150</p>
                            </div>
                        </div>
                    </div>
                </div> <br />
                <h2>We're here to satisfy you electronically</h2>
            </DefaultLayout>

        );
    }
}
module.exports = IndexHome
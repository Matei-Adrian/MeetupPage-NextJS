(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 751:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "MeetupItem_item__3siMU",
	"image": "MeetupItem_image__13rAP",
	"content": "MeetupItem_content__3uEkT",
	"actions": "MeetupItem_actions__LvT9B"
};


/***/ }),

/***/ 644:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "MeetupList_list__1iafn"
};


/***/ }),

/***/ 491:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card__3KSLO"
};


/***/ }),

/***/ 117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(491);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);


function Card(props) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
        children: props.children
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ 598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(13);
// EXTERNAL MODULE: ./components/ui/Card.js
var Card = __webpack_require__(117);
// EXTERNAL MODULE: ./components/meetups/MeetupItem.module.css
var MeetupItem_module = __webpack_require__(751);
var MeetupItem_module_default = /*#__PURE__*/__webpack_require__.n(MeetupItem_module);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/meetups/MeetupItem.js




function MeetupItem(props) {
    const router = (0,router_namespaceObject.useRouter)();
    const showDetailHandler = ()=>{
        router.push('/' + props.id);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: (MeetupItem_module_default()).item,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (MeetupItem_module_default()).image,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: props.image,
                        alt: props.title
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (MeetupItem_module_default()).content,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: props.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("address", {
                            children: props.address
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (MeetupItem_module_default()).actions,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: showDetailHandler,
                        children: "Show Details"
                    })
                })
            ]
        })
    }));
}
/* harmony default export */ const meetups_MeetupItem = (MeetupItem);

// EXTERNAL MODULE: ./components/meetups/MeetupList.module.css
var MeetupList_module = __webpack_require__(644);
var MeetupList_module_default = /*#__PURE__*/__webpack_require__.n(MeetupList_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupList.js



function MeetupList(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (MeetupList_module_default()).list,
        children: props.meetups.map((meetup)=>/*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupItem, {
                id: meetup.id,
                image: meetup.image,
                title: meetup.title,
                address: meetup.address
            }, meetup.id)
        )
    }));
}
/* harmony default export */ const meetups_MeetupList = (MeetupList);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./pages/index.js





const HomePage = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "React Meetups"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Browse a huge list of highly active React meetups"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupList, {
                meetups: props.meetups
            })
        ]
    }));
};
// export const getServerSideProps = async (context) => {
//     const req = context.req;
//     const res = context.res;
//     //fetch data from API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// };
const getStaticProps = async ()=>{
    //fetch some data from API
    const client = await external_mongodb_.MongoClient.connect('mongodb+srv://Shulizen:Dragnea061999.@cluster0.fimcu.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.find().toArray();
    client.close();
    return {
        props: {
            meetups: result.map((meetup)=>{
                return {
                    title: meetup.title,
                    address: meetup.address,
                    image: meetup.image,
                    id: meetup._id.toString()
                };
            })
        },
        revalidate: 1
    };
};
/* harmony default export */ const pages = (HomePage);


/***/ }),

/***/ 13:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(598));
module.exports = __webpack_exports__;

})();
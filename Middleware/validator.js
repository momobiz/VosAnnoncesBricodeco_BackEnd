const {check, validationResult}=require("express-validator");

exports.userRule=()=>[
        check("userName",'this field is required')
        .notEmpty(),
    
        check("password",'this field is required')
        .notEmpty(),
    
        check("email",'this field is required')
        .isEmail()

                                     
    ]
exports.postRule=()=>[
    check("title", "this field is required ").notEmpty(),
    check("category", "this field is required ").notEmpty(),
    check("phone", "this field is required ").notEmpty(),
    check("city", "this field is required ").notEmpty(),

]

exports.validator=(req, res, next)=>{
   const error=validationResult(req);
   error.isEmpty()?next():res.status(404).json({errors:error.array()})
}

exports.userRuleAuth=()=>[
    

    check("password",'this field is required')
    .exists(),

    check("email",'this field is required')
    .isEmail()

                                 
]
exports.commentRule=()=>[
    check("text", "this field is required ").notEmpty()

]
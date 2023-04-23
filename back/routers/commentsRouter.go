package routers

import (
	beego "github.com/beego/beego/v2/server/web"
	"github.com/beego/beego/v2/server/web/context/param"
)

func init() {

	beego.GlobalControllerRouter["back/controllers:ObjectController"] = append(
		beego.GlobalControllerRouter["back/controllers:ObjectController"],
		beego.ControllerComments{
			Method:           "Post",
			Router:           `/`,
			AllowHTTPMethods: []string{"post"},
			MethodParams:     param.Make(),
			Filters:          nil,
			Params:           nil,
		},
	)

	beego.GlobalControllerRouter["back/controllers:ObjectController"] = append(
		beego.GlobalControllerRouter["back/controllers:ObjectController"],
		beego.ControllerComments{
			Method:           "GetAll",
			Router:           `/`,
			AllowHTTPMethods: []string{"get"},
			MethodParams:     param.Make(),
			Filters:          nil,
			Params:           nil,
		},
	)

	beego.GlobalControllerRouter["back/controllers:ObjectController"] = append(
		beego.GlobalControllerRouter["back/controllers:ObjectController"],
		beego.ControllerComments{
			Method:           "Get",
			Router:           `/:objectId`,
			AllowHTTPMethods: []string{"get"},
			MethodParams:     param.Make(),
			Filters:          nil,
			Params:           nil,
		},
	)

	beego.GlobalControllerRouter["back/controllers:ObjectController"] = append(
		beego.GlobalControllerRouter["back/controllers:ObjectController"],
		beego.ControllerComments{
			Method:           "Put",
			Router:           `/:objectId`,
			AllowHTTPMethods: []string{"put"},
			MethodParams:     param.Make(),
			Filters:          nil,
			Params:           nil,
		},
	)

	beego.GlobalControllerRouter["back/controllers:ObjectController"] = append(
		beego.GlobalControllerRouter["back/controllers:ObjectController"],
		beego.ControllerComments{
			Method:           "Delete",
			Router:           `/:objectId`,
			AllowHTTPMethods: []string{"delete"},
			MethodParams:     param.Make(),
			Filters:          nil,
			Params:           nil,
		},
	)

	beego.GlobalControllerRouter["back/controllers:OrdersController"] = append(
		beego.GlobalControllerRouter["back/controllers:OrdersController"],
		beego.ControllerComments{
			Method:           "Post",
			Router:           `/`,
			AllowHTTPMethods: []string{"post"},
			MethodParams:     param.Make(),
			Filters:          nil,
			Params:           nil,
		},
	)

	beego.GlobalControllerRouter["back/controllers:OrdersController"] = append(
		beego.GlobalControllerRouter["back/controllers:OrdersController"],
		beego.ControllerComments{
			Method:           "GetAll",
			Router:           `/`,
			AllowHTTPMethods: []string{"get"},
			MethodParams:     param.Make(),
			Filters:          nil,
			Params:           nil,
		},
	)

	beego.GlobalControllerRouter["back/controllers:OrdersController"] = append(
		beego.GlobalControllerRouter["back/controllers:OrdersController"],
		beego.ControllerComments{
			Method:           "GetOne",
			Router:           `/:id`,
			AllowHTTPMethods: []string{"get"},
			MethodParams:     param.Make(),
			Filters:          nil,
			Params:           nil,
		},
	)

	beego.GlobalControllerRouter["back/controllers:OrdersController"] = append(
		beego.GlobalControllerRouter["back/controllers:OrdersController"],
		beego.ControllerComments{
			Method:           "Put",
			Router:           `/:id`,
			AllowHTTPMethods: []string{"put"},
			MethodParams:     param.Make(),
			Filters:          nil,
			Params:           nil,
		},
	)

	beego.GlobalControllerRouter["back/controllers:OrdersController"] = append(
		beego.GlobalControllerRouter["back/controllers:OrdersController"],
		beego.ControllerComments{
			Method:           "Delete",
			Router:           `/:id`,
			AllowHTTPMethods: []string{"delete"},
			MethodParams:     param.Make(),
			Filters:          nil,
			Params:           nil,
		},
	)

	beego.GlobalControllerRouter["back/controllers:UsersController"] = append(
		beego.GlobalControllerRouter["back/controllers:UsersController"],
		beego.ControllerComments{
			Method:           "Post",
			Router:           `/`,
			AllowHTTPMethods: []string{"post"},
			MethodParams:     param.Make(),
			Filters:          nil,
			Params:           nil,
		},
	)

	beego.GlobalControllerRouter["back/controllers:UsersController"] = append(
		beego.GlobalControllerRouter["back/controllers:UsersController"],
		beego.ControllerComments{
			Method:           "GetAll",
			Router:           `/`,
			AllowHTTPMethods: []string{"get"},
			MethodParams:     param.Make(),
			Filters:          nil,
			Params:           nil,
		},
	)

	beego.GlobalControllerRouter["back/controllers:UsersController"] = append(
		beego.GlobalControllerRouter["back/controllers:UsersController"],
		beego.ControllerComments{
			Method:           "Get",
			Router:           `/:id`,
			AllowHTTPMethods: []string{"get"},
			MethodParams:     param.Make(),
			Filters:          nil,
			Params:           nil,
		},
	)

	beego.GlobalControllerRouter["back/controllers:UsersController"] = append(
		beego.GlobalControllerRouter["back/controllers:UsersController"],
		beego.ControllerComments{
			Method:           "Put",
			Router:           `/:id`,
			AllowHTTPMethods: []string{"put"},
			MethodParams:     param.Make(),
			Filters:          nil,
			Params:           nil,
		},
	)

	beego.GlobalControllerRouter["back/controllers:UsersController"] = append(
		beego.GlobalControllerRouter["back/controllers:UsersController"],
		beego.ControllerComments{
			Method:           "Delete",
			Router:           `/:id`,
			AllowHTTPMethods: []string{"delete"},
			MethodParams:     param.Make(),
			Filters:          nil,
			Params:           nil,
		},
	)

	beego.GlobalControllerRouter["back/controllers:UsersController"] = append(
		beego.GlobalControllerRouter["back/controllers:UsersController"],
		beego.ControllerComments{
			Method:           "Login",
			Router:           `/login`,
			AllowHTTPMethods: []string{"get"},
			MethodParams:     param.Make(),
			Filters:          nil,
			Params:           nil,
		},
	)

	beego.GlobalControllerRouter["back/controllers:UsersController"] = append(
		beego.GlobalControllerRouter["back/controllers:UsersController"],
		beego.ControllerComments{
			Method:           "Logout",
			Router:           `/logout`,
			AllowHTTPMethods: []string{"get"},
			MethodParams:     param.Make(),
			Filters:          nil,
			Params:           nil,
		},
	)

}

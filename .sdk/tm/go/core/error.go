package core

type MicrolinkError struct {
	IsMicrolinkError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewMicrolinkError(code string, msg string, ctx *Context) *MicrolinkError {
	return &MicrolinkError{
		IsMicrolinkError: true,
		Sdk:              "Microlink",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *MicrolinkError) Error() string {
	return e.Msg
}

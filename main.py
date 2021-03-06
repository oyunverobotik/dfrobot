def on_button_pressed_a():
    radio.send_string("left")
input.on_button_pressed(Button.A, on_button_pressed_a)

def my_function():
    radio.send_string("forward")
WSJoyStick.on_key(KEY.E, my_function)

def on_button_pressed_ab():
    radio.send_string("stop")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    if receivedString == "right":
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motor_stop(maqueen.Motors.M2)
    elif receivedString == "left":
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motor_stop(maqueen.Motors.M1)
    elif receivedString == "stop":
        maqueen.motor_stop(maqueen.Motors.ALL)
    elif receivedString == "forward":
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 255)
    elif receivedString == "backwards":
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CCW, 255)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    radio.send_string("right")
input.on_button_pressed(Button.B, on_button_pressed_b)

def my_function2():
    radio.send_string("backwards")
WSJoyStick.on_key(KEY.C, my_function2)

WSJoyStick.joy_stick_init()
radio.set_group(2)
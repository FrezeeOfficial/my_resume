import Mediator from './Mediator';
import React from 'react';
import Shell from "./Shell";


var Commands = (function() {
    var sys_struct = {
        Default: {user: "unknown", console_format: "unknown", class_tag: "p_default", sys_class_tag: "p_default"},
        Sys: {user: "sys", console_format: "SYS", class_tag: "p_default", sys_class_tag: "p_default"},
        Sys_Critical: {user: "sys", console_format: "SYS", class_tag: "p_yellow", sys_class_tag: "p_red"},
        Usr: {user: "usr", console_format: "USR", class_tag: "p_green", sys_class_tag: "p_default"}
    };

    const _private = {
        // the command map will contain all the commands which can be accessed
        commands_map: [],

        clear_console() {

        },

        add_function(function_name, function_act, function_access_level) {
            var func = {
                name: function_name,
                func: function_act,
                access_level: function_access_level
            }
            _private.commands_map.push(func);
        }
    }

    const commands = {
        print(usr_type, args) {
            if (usr_type.user == undefined) {
                Mediator.publish("print", sys_struct.Usr, usr_type);
            } else {
                Mediator.publish("print", usr_type, args);
            }
        },
        help() {
            var res = "The available commands are: ";
            for (var i = 0; i < _private.commands_map.length; i++) {
                res = res + _private.commands_map[i].name + ", ";
            }

            console.log(res);
            commands.print(sys_struct.Sys, res);
        },
        clear() {
            Mediator.publish("clear");
        }
    }

    function route_command(command_name, command_arguments) {
        command_arguments.shift();
        var func_found = false;
        for (var i = 0; i < _private.commands_map.length; i++) {
            if (command_name == _private.commands_map[i].name) {
                _private.commands_map[i].func(command_arguments);
                func_found = true;
            }
        }

        if (!func_found) {
            commands.print(sys_struct.Sys, "unknown command, type \"help\" for a list of available commands");
        }
    }

    function init() {
        console.log("Initialising");

        _private.add_function("print", commands.print, 0);
        _private.add_function("help", commands.help, 0);
        _private.add_function("clear", commands.clear, 0);

        var initiating = "Initiating";
        var interval = 0;
        var finished = false;


        for (var i = 0; i < 10; i++) {
            interval = interval + 1000;
            setTimeout(function() {
                commands.clear();
                initiating = initiating + ".";
                commands.print(sys_struct.Sys_Critical, initiating);
            }, interval);
        }

        setTimeout(function(){ commands.print(sys_struct.Sys_Critical, "Checking Module: Shell"); }, 2000);
        setTimeout(function(){ commands.print(sys_struct.Sys_Critical, "Success!"); }, 3000);

        setTimeout(function(){ commands.print(sys_struct.Sys_Critical, "Checking Module: Commands"); }, 5000);
        setTimeout(function(){ commands.print(sys_struct.Sys_Critical, "Success!"); }, 6000);

        setTimeout(function(){ commands.print(sys_struct.Sys_Critical, "Checking Module: Mediator"); }, 8000);
        setTimeout(function(){ commands.print(sys_struct.Sys_Critical, "Success!"); }, 9000);


        setTimeout(function(){ commands.print(sys_struct.Sys_Critical, "Initiating Finished..."); }, 12000);
        setTimeout(function(){ Mediator.publish("main_colour"); commands.clear(); commands.print(sys_struct.Sys_Critical, "¯\\_(ツ)_/¯ ~ Welcome to the CLI. Type \"help\" for available commands"); }, 15000);
    }

    return {
        sys_struct,
        init,
        route_command
    };
}())

export default Commands;
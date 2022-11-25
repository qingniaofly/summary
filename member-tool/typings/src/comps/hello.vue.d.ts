declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {
            formValidate: {
                minQuitTimeout: number;
                maxQuitTimeout: number;
                minGroupCount: number;
                maxGroupCount: number;
                minPerGroup: number;
                maxPerGroup: number;
                name: string;
                mail: string;
                city: string;
                gender: string;
                interest: never[];
                date: string;
                time: string;
                desc: string;
            };
            ruleValidate: {
                name: {
                    required: boolean;
                    message: string;
                    trigger: string;
                }[];
                mail: ({
                    required: boolean;
                    message: string;
                    trigger: string;
                    type?: undefined;
                } | {
                    type: string;
                    message: string;
                    trigger: string;
                    required?: undefined;
                })[];
                city: {
                    required: boolean;
                    message: string;
                    trigger: string;
                }[];
                gender: {
                    required: boolean;
                    message: string;
                    trigger: string;
                }[];
                interest: ({
                    required: boolean;
                    type: string;
                    min: number;
                    message: string;
                    trigger: string;
                    max?: undefined;
                } | {
                    type: string;
                    max: number;
                    message: string;
                    trigger: string;
                    required?: undefined;
                    min?: undefined;
                })[];
                date: {
                    required: boolean;
                    type: string;
                    message: string;
                    trigger: string;
                }[];
                time: {
                    required: boolean;
                    type: string;
                    message: string;
                    trigger: string;
                }[];
                desc: ({
                    required: boolean;
                    message: string;
                    trigger: string;
                    type?: undefined;
                    min?: undefined;
                } | {
                    type: string;
                    min: number;
                    message: string;
                    trigger: string;
                    required?: undefined;
                })[];
            };
        };
        $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
            msg: string;
        }>>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
            msg: string;
        }>>>, {}, {
            formValidate: {
                minQuitTimeout: number;
                maxQuitTimeout: number;
                minGroupCount: number;
                maxGroupCount: number;
                minPerGroup: number;
                maxPerGroup: number;
                name: string;
                mail: string;
                city: string;
                gender: string;
                interest: never[];
                date: string;
                time: string;
                desc: string;
            };
            ruleValidate: {
                name: {
                    required: boolean;
                    message: string;
                    trigger: string;
                }[];
                mail: ({
                    required: boolean;
                    message: string;
                    trigger: string;
                    type?: undefined;
                } | {
                    type: string;
                    message: string;
                    trigger: string;
                    required?: undefined;
                })[];
                city: {
                    required: boolean;
                    message: string;
                    trigger: string;
                }[];
                gender: {
                    required: boolean;
                    message: string;
                    trigger: string;
                }[];
                interest: ({
                    required: boolean;
                    type: string;
                    min: number;
                    message: string;
                    trigger: string;
                    max?: undefined;
                } | {
                    type: string;
                    max: number;
                    message: string;
                    trigger: string;
                    required?: undefined;
                    min?: undefined;
                })[];
                date: {
                    required: boolean;
                    type: string;
                    message: string;
                    trigger: string;
                }[];
                time: {
                    required: boolean;
                    type: string;
                    message: string;
                    trigger: string;
                }[];
                desc: ({
                    required: boolean;
                    message: string;
                    trigger: string;
                    type?: undefined;
                    min?: undefined;
                } | {
                    type: string;
                    min: number;
                    message: string;
                    trigger: string;
                    required?: undefined;
                })[];
            };
        }, {
            groupRange: {
                get(): number[];
                set(newValue: any): void;
            };
            perGroupRange: {
                get(): number[];
                set(newValue: any): void;
            };
            quitTimeoutRange: {
                get(): number[];
                set(newValue: any): void;
            };
        }, {
            handleSubmit(name: any): void;
            handleStop(): void;
            handleStart(): void;
            handleConn(): void;
            handleReset(name: any): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
        msg: string;
    }>>> & import("vue").ShallowUnwrapRef<{}> & {
        formValidate: {
            minQuitTimeout: number;
            maxQuitTimeout: number;
            minGroupCount: number;
            maxGroupCount: number;
            minPerGroup: number;
            maxPerGroup: number;
            name: string;
            mail: string;
            city: string;
            gender: string;
            interest: never[];
            date: string;
            time: string;
            desc: string;
        };
        ruleValidate: {
            name: {
                required: boolean;
                message: string;
                trigger: string;
            }[];
            mail: ({
                required: boolean;
                message: string;
                trigger: string;
                type?: undefined;
            } | {
                type: string;
                message: string;
                trigger: string;
                required?: undefined;
            })[];
            city: {
                required: boolean;
                message: string;
                trigger: string;
            }[];
            gender: {
                required: boolean;
                message: string;
                trigger: string;
            }[];
            interest: ({
                required: boolean;
                type: string;
                min: number;
                message: string;
                trigger: string;
                max?: undefined;
            } | {
                type: string;
                max: number;
                message: string;
                trigger: string;
                required?: undefined;
                min?: undefined;
            })[];
            date: {
                required: boolean;
                type: string;
                message: string;
                trigger: string;
            }[];
            time: {
                required: boolean;
                type: string;
                message: string;
                trigger: string;
            }[];
            desc: ({
                required: boolean;
                message: string;
                trigger: string;
                type?: undefined;
                min?: undefined;
            } | {
                type: string;
                min: number;
                message: string;
                trigger: string;
                required?: undefined;
            })[];
        };
    } & {
        groupRange: number[];
        perGroupRange: number[];
        quitTimeoutRange: number[];
    } & {
        handleSubmit(name: any): void;
        handleStop(): void;
        handleStart(): void;
        handleConn(): void;
        handleReset(name: any): void;
    } & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    msg: string;
}>>>, {}, {
    formValidate: {
        minQuitTimeout: number;
        maxQuitTimeout: number;
        minGroupCount: number;
        maxGroupCount: number;
        minPerGroup: number;
        maxPerGroup: number;
        name: string;
        mail: string;
        city: string;
        gender: string;
        interest: never[];
        date: string;
        time: string;
        desc: string;
    };
    ruleValidate: {
        name: {
            required: boolean;
            message: string;
            trigger: string;
        }[];
        mail: ({
            required: boolean;
            message: string;
            trigger: string;
            type?: undefined;
        } | {
            type: string;
            message: string;
            trigger: string;
            required?: undefined;
        })[];
        city: {
            required: boolean;
            message: string;
            trigger: string;
        }[];
        gender: {
            required: boolean;
            message: string;
            trigger: string;
        }[];
        interest: ({
            required: boolean;
            type: string;
            min: number;
            message: string;
            trigger: string;
            max?: undefined;
        } | {
            type: string;
            max: number;
            message: string;
            trigger: string;
            required?: undefined;
            min?: undefined;
        })[];
        date: {
            required: boolean;
            type: string;
            message: string;
            trigger: string;
        }[];
        time: {
            required: boolean;
            type: string;
            message: string;
            trigger: string;
        }[];
        desc: ({
            required: boolean;
            message: string;
            trigger: string;
            type?: undefined;
            min?: undefined;
        } | {
            type: string;
            min: number;
            message: string;
            trigger: string;
            required?: undefined;
        })[];
    };
}, {
    groupRange: {
        get(): number[];
        set(newValue: any): void;
    };
    perGroupRange: {
        get(): number[];
        set(newValue: any): void;
    };
    quitTimeoutRange: {
        get(): number[];
        set(newValue: any): void;
    };
}, {
    handleSubmit(name: any): void;
    handleStop(): void;
    handleStart(): void;
    handleConn(): void;
    handleReset(name: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};

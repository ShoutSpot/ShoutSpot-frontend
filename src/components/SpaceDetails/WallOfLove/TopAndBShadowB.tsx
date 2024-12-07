export const TopAndBShadowB = () => {
    return (
        <>
            <div className="flex items-center mt-3">
                        <label htmlFor="scroll-speed" className="block text-sm text-gray-800">
                            Scroll speed:
                        </label>
                        <select
                            id="scroll-speed"
                            className="ml-2 py-1 text-gray-800 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                        >
                            <option value="0.5">Very slow</option>
                            <option value="0.75">Slow</option>
                            <option value="1">Normal</option>
                            <option value="1.5">Fast</option>
                            <option value="2.0">Very fast</option>
                        </select>
                    </div>

                    {/* --------------------------------- */}

                    <div className="flex flex-wrap -mx-3 mt-3">
                        <div className="w-full px-3">
                            <label
                                className="flex flex-row text-gray-700 text-sm font-medium mb-2"
                                htmlFor="header"
                            >
                                Top and bottom shadow background
                            </label>
                            <div
                                className="twitter-picker"
                                style={{
                                    width: "276px",
                                    background: "rgb(255, 255, 255)",
                                    border: "0px solid rgba(0, 0, 0, 0.25)",
                                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 4px",
                                    borderRadius: "4px",
                                    position: "relative",
                                }}
                            >
                                <div
                                    style={{
                                        width: "0px",
                                        height: "0px",
                                        borderStyle: "solid",
                                        borderWidth: "0px 9px 10px",
                                        borderColor: "transparent transparent rgba(0, 0, 0, 0.1)",
                                        position: "absolute",
                                        display: "none",
                                    }}
                                ></div>
                                <div
                                    style={{
                                        width: "0px",
                                        height: "0px",
                                        borderStyle: "solid",
                                        borderWidth: "0px 9px 10px",
                                        borderColor: "transparent transparent rgb(255, 255, 255)",
                                        position: "absolute",
                                        display: "none",
                                    }}
                                ></div>
                                <div style={{ padding: "15px 9px 9px 15px" }}>
                                    <span>
                                        <div
                                            title="#000000"
                                            tabIndex='0'
                                            style={{
                                                background: "rgb(0, 0, 0)",
                                                height: "30px",
                                                width: "30px",
                                                cursor: "pointer",
                                                position: "relative",
                                                outline: "none",
                                                float: "left",
                                                borderRadius: "4px",
                                                margin: "0px 6px 6px 0px",
                                            }}
                                        ></div>
                                    </span>
                                    <span>
                                        <div
                                            title="#F7F7F7"
                                            tabIndex="0"
                                            style={{
                                                background: "rgb(247, 247, 247)",
                                                height: "30px",
                                                width: "30px",
                                                cursor: "pointer",
                                                position: "relative",
                                                outline: "none",
                                                float: "left",
                                                borderRadius: "4px",
                                                margin: "0px 6px 6px 0px",
                                            }}
                                        ></div>
                                    </span>
                                    <span>
                                        <div
                                            title="#5d5dff"
                                            tabIndex="0"
                                            style={{
                                                background: "rgb(93, 93, 255)",
                                                height: "30px",
                                                width: "30px",
                                                cursor: "pointer",
                                                position: "relative",
                                                outline: "none",
                                                float: "left",
                                                borderRadius: "4px",
                                                margin: "0px 6px 6px 0px",
                                            }}
                                        ></div>
                                    </span>
                                    <div
                                        style={{
                                            background: "rgb(240, 240, 240)",
                                            height: "30px",
                                            width: "30px",
                                            borderRadius: "4px 0px 0px 4px",
                                            float: "left",
                                            color: "rgb(152, 161, 164)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        #
                                    </div>
                                    <div style={{ position: "relative" }}>
                                        <input
                                            id="rc-editable-input-56"
                                            spellCheck="false"
                                            value="AABBCC"
                                            style={{
                                                width: "100px",
                                                fontSize: "14px",
                                                color: "rgb(102, 102, 102)",
                                                border: "0px",
                                                outline: "none",
                                                height: "28px",
                                                boxShadow: "rgb(240, 240, 240) 0px 0px 0px 1px inset",
                                                boxSizing: "content-box",
                                                borderRadius: "0px 4px 4px 0px",
                                                float: "left",
                                                paddingLeft: "8px",
                                            }}
                                        />
                                    </div>
                                    <div style={{ clear: "both" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

        </>
    )
}
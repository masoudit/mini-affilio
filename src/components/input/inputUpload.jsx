import { InboxOutlined } from "@ant-design/icons";
import { Form, Upload } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { appUploadFile } from "@/app/local/appSlice";

const InputUpload = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onChangeDragger = (info) => {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      // message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      // message.error(`${info.file.name} file upload failed.`);
    }
  };

  const onDrop = (e) => {
    console.log("v-------", e.dataTransfer.files[0]);
    if (!e) {
      dispatch(appUploadFile(e.dataTransfer.files[0]));
    }
  };

  return (
    <>
      <Form.Item label={t("user.picIdentityNumber")}>
        <Form.Item
          name={["user", "picIdentityNumber"]}
          valuePropName="fileList"
          // getValueFromEvent={normFile}
          noStyle
        >
          <Upload.Dragger
            onChange={onChangeDragger}
            onDrop={onDrop}
            name="file"
            multiple={false}
            // action="/upload.do"
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>
    </>
  );
};

export default InputUpload;

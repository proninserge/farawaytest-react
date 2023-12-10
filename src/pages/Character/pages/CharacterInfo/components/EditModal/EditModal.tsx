import React, { FC, useEffect } from "react";
import { Input, Modal } from "../../../../../../ui-kit";
import { Form } from "antd";
import { EditModalProps } from "./types";
import { useStores } from "../../../../../../stores";
import { observer } from "mobx-react";
import { DATE_FIELDS_UPPERCASE } from "../../../../../../utils/constants";

export const EditModal: FC<EditModalProps> = observer((props) => {
  const { fields, isModalOpen, handleOk, handleCancel, ...character } = props;

  const { peopleViewStore } = useStores();

  const [submittable, setSubmittable] = React.useState(false);

  const [form] = Form.useForm();

  const values = Form.useWatch([], form);

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      },
    );
  }, [values]);

  const onModalOk = () => {
    const newData = form.getFieldsValue();
    peopleViewStore.editCharacter(newData);
    handleOk();
  };

  const onModalCancel = () => {
    // form.resetFields();
    peopleViewStore.resetCharacter();
    form.setFieldsValue(peopleViewStore.initialCharacter);
    handleCancel();
  };

  return (
    <Modal title="Edit character" okButtonProps={{ disabled: !submittable }} open={isModalOpen} onOk={onModalOk} onCancel={onModalCancel}>
      <Form initialValues={character} form={form} name="editCharacter" layout="vertical" autoComplete="off">
        {fields.map(field => {
          return (
            <Form.Item key={field.key} name={field.label.toLowerCase()} label={field.label} rules={[{ required: true }]}>
              <Input disabled={DATE_FIELDS_UPPERCASE.includes(field.label)} />
            </Form.Item>
          );
        })}
      </Form>
    </Modal>
  );
});
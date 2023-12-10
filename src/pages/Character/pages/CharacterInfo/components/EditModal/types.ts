import { PeopleData } from "../../../../../../stores";
import { DescriptionsItemType } from "../../types";

export type EditModalProps = PeopleData.Character & {
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
    fields: DescriptionsItemType[];
};
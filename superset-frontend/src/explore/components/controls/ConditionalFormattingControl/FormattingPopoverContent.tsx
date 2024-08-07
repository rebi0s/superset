/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { useState } from 'react';
import { styled, SupersetTheme, t, useTheme } from '@superset-ui/core';
import { ColorSchemeEnum } from '@superset-ui/plugin-chart-table';
import {
  Comparator,
  MultipleValueComparators,
} from '@superset-ui/chart-controls';
import { Form, FormItem, FormProps } from 'src/components/Form';
import Select from 'src/components/Select/Select';
import { Col, Row } from 'src/components';
import { InputNumber } from 'src/components/Input';
import Button from 'src/components/Button';
import { ConditionalFormattingConfig } from './types';

const FullWidthInputNumber = styled(InputNumber)`
  width: 100%;
`;

const JustifyEnd = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const colorSchemeOptions = (theme: SupersetTheme) => [
  { value: theme.colors.success.light1, label: t('success') },
  { value: theme.colors.alert.light1, label: t('alert') },
  { value: theme.colors.error.light1, label: t('error') },
  { value: theme.colors.success.dark1, label: t('success dark') },
  { value: theme.colors.alert.dark1, label: t('alert dark') },
  { value: theme.colors.error.dark1, label: t('error dark') },
  { value: theme.colors.lacuna1.color, label: theme.colors.lacuna1.label },
  { value: theme.colors.lacuna2.color, label: theme.colors.lacuna2.label },
  { value: theme.colors.lacuna3.color, label: theme.colors.lacuna3.label },
  { value: theme.colors.lacuna4.color, label: theme.colors.lacuna4.label },
  { value: theme.colors.lacuna5.color, label: theme.colors.lacuna5.label },
  { value: theme.colors.lacuna6.color, label: theme.colors.lacuna6.label },
  { value: theme.colors.lacuna7.color, label: theme.colors.lacuna7.label },
  { value: theme.colors.lacuna8.color, label: theme.colors.lacuna1.label },
  { value: theme.colors.lacuna9.color, label: theme.colors.lacuna8.label },
  { value: theme.colors.lacuna10.color, label: theme.colors.lacuna10.label },
  { value: theme.colors.lacuna11.color, label: theme.colors.lacuna11.label },
  { value: theme.colors.lacuna12.color, label: theme.colors.lacuna12.label },
  { value: theme.colors.lacuna13.color, label: theme.colors.lacuna13.label },
  { value: theme.colors.lacuna14.color, label: theme.colors.lacuna14.label },
  { value: theme.colors.lacuna15.color, label: theme.colors.lacuna15.label },
  { value: theme.colors.lacuna16.color, label: theme.colors.lacuna16.label },
  { value: theme.colors.lacuna17.color, label: theme.colors.lacuna17.label },
  { value: theme.colors.lacuna18.color, label: theme.colors.lacuna18.label },
  { value: theme.colors.lacuna19.color, label: theme.colors.lacuna19.label },
  { value: theme.colors.lacuna20.color, label: theme.colors.lacuna20.label },
  { value: theme.colors.lacuna21.color, label: theme.colors.lacuna21.label },
  { value: theme.colors.lacuna22.color, label: theme.colors.lacuna22.label },
  { value: theme.colors.lacuna23.color, label: theme.colors.lacuna23.label },
  { value: theme.colors.lacuna24.color, label: theme.colors.lacuna24.label },
  { value: theme.colors.lacuna25.color, label: theme.colors.lacuna25.label },
  { value: theme.colors.lacuna26.color, label: theme.colors.lacuna26.label },
  { value: theme.colors.lacuna27.color, label: theme.colors.lacuna27.label },
  { value: theme.colors.lacuna28.color, label: theme.colors.lacuna28.label },
  { value: theme.colors.lacuna29.color, label: theme.colors.lacuna29.label },
  { value: theme.colors.lacuna30.color, label: theme.colors.lacuna30.label },
  { value: theme.colors.lacuna31.color, label: theme.colors.lacuna31.label },
  { value: theme.colors.lacuna32.color, label: theme.colors.lacuna32.label },
  { value: theme.colors.lacuna33.color, label: theme.colors.lacuna33.label },
  { value: theme.colors.lacuna34.color, label: theme.colors.lacuna34.label },
  { value: theme.colors.lacuna35.color, label: theme.colors.lacuna35.label },
  { value: theme.colors.lacuna36.color, label: theme.colors.lacuna36.label },
  { value: theme.colors.lacuna37.color, label: theme.colors.lacuna37.label },
  { value: theme.colors.lacuna38.color, label: theme.colors.lacuna38.label },
  { value: theme.colors.lacuna39.color, label: theme.colors.lacuna39.label },
  { value: theme.colors.lacuna40.color, label: theme.colors.lacuna40.label },
  { value: theme.colors.lacuna41.color, label: theme.colors.lacuna41.label },
  { value: theme.colors.lacuna42.color, label: theme.colors.lacuna42.label },
  { value: theme.colors.lacuna43.color, label: theme.colors.lacuna43.label },
  { value: theme.colors.lacuna44.color, label: theme.colors.lacuna44.label },
  { value: theme.colors.lacuna45.color, label: theme.colors.lacuna45.label },
  { value: theme.colors.lacuna46.color, label: theme.colors.lacuna46.label },
  { value: theme.colors.lacuna47.color, label: theme.colors.lacuna47.label },
  { value: theme.colors.lacuna48.color, label: theme.colors.lacuna48.label },
  { value: theme.colors.lacuna49.color, label: theme.colors.lacuna49.label },
  { value: theme.colors.lacuna50.color, label: theme.colors.lacuna50.label },
  { value: theme.colors.lacuna51.color, label: theme.colors.lacuna51.label },
  { value: theme.colors.lacuna52.color, label: theme.colors.lacuna52.label },
  { value: theme.colors.lacuna53.color, label: theme.colors.lacuna53.label },
  { value: theme.colors.lacuna54.color, label: theme.colors.lacuna54.label },
  { value: theme.colors.lacuna55.color, label: theme.colors.lacuna55.label },
  { value: theme.colors.lacuna56.color, label: theme.colors.lacuna56.label },
  { value: theme.colors.lacuna57.color, label: theme.colors.lacuna57.label },
  { value: theme.colors.lacuna58.color, label: theme.colors.lacuna58.label },
  { value: theme.colors.lacuna59.color, label: theme.colors.lacuna59.label },
  { value: theme.colors.lacuna60.color, label: theme.colors.lacuna60.label },
  { value: theme.colors.lacuna61.color, label: theme.colors.lacuna61.label },
  { value: theme.colors.lacuna62.color, label: theme.colors.lacuna62.label },
  { value: theme.colors.lacuna63.color, label: theme.colors.lacuna63.label },
  { value: theme.colors.lacuna64.color, label: theme.colors.lacuna64.label },
];

const operatorOptions = [
  { value: Comparator.None, label: t('None') },
  { value: Comparator.GreaterThan, label: '>' },
  { value: Comparator.LessThan, label: '<' },
  { value: Comparator.GreaterOrEqual, label: '≥' },
  { value: Comparator.LessOrEqual, label: '≤' },
  { value: Comparator.Equal, label: '=' },
  { value: Comparator.NotEqual, label: '≠' },
  { value: Comparator.Between, label: '< x <' },
  { value: Comparator.BetweenOrEqual, label: '≤ x ≤' },
  { value: Comparator.BetweenOrLeftEqual, label: '≤ x <' },
  { value: Comparator.BetweenOrRightEqual, label: '< x ≤' },
];

const targetValueValidator =
  (
    compare: (targetValue: number, compareValue: number) => boolean,
    rejectMessage: string,
  ) =>
  (targetValue: number | string) =>
  (_: any, compareValue: number | string) => {
    if (
      !targetValue ||
      !compareValue ||
      compare(Number(targetValue), Number(compareValue))
    ) {
      return Promise.resolve();
    }
    return Promise.reject(new Error(rejectMessage));
  };

const targetValueLeftValidator = targetValueValidator(
  (target: number, val: number) => target > val,
  t('This value should be smaller than the right target value'),
);

const targetValueRightValidator = targetValueValidator(
  (target: number, val: number) => target < val,
  t('This value should be greater than the left target value'),
);

const isOperatorMultiValue = (operator?: Comparator) =>
  operator && MultipleValueComparators.includes(operator);

const isOperatorNone = (operator?: Comparator) =>
  !operator || operator === Comparator.None;

const rulesRequired = [{ required: true, message: t('Required') }];

type GetFieldValue = Pick<Required<FormProps>['form'], 'getFieldValue'>;
const rulesTargetValueLeft = [
  { required: true, message: t('Required') },
  ({ getFieldValue }: GetFieldValue) => ({
    validator: targetValueLeftValidator(getFieldValue('targetValueRight')),
  }),
];

const rulesTargetValueRight = [
  { required: true, message: t('Required') },
  ({ getFieldValue }: GetFieldValue) => ({
    validator: targetValueRightValidator(getFieldValue('targetValueLeft')),
  }),
];

const targetValueLeftDeps = ['targetValueRight'];
const targetValueRightDeps = ['targetValueLeft'];

const shouldFormItemUpdate = (
  prevValues: ConditionalFormattingConfig,
  currentValues: ConditionalFormattingConfig,
) =>
  isOperatorNone(prevValues.operator) !==
    isOperatorNone(currentValues.operator) ||
  isOperatorMultiValue(prevValues.operator) !==
    isOperatorMultiValue(currentValues.operator);

const renderOperator = ({ showOnlyNone }: { showOnlyNone?: boolean } = {}) => (
  <FormItem
    name="operator"
    label={t('Operator')}
    rules={rulesRequired}
    initialValue={operatorOptions[0].value}
  >
    <Select
      ariaLabel={t('Operator')}
      options={showOnlyNone ? [operatorOptions[0]] : operatorOptions}
    />
  </FormItem>
);

const renderOperatorFields = ({ getFieldValue }: GetFieldValue) =>
  isOperatorNone(getFieldValue('operator')) ? (
    <Row gutter={12}>
      <Col span={6}>{renderOperator()}</Col>
    </Row>
  ) : isOperatorMultiValue(getFieldValue('operator')) ? (
    <Row gutter={12}>
      <Col span={9}>
        <FormItem
          name="targetValueLeft"
          label={t('Left value')}
          rules={rulesTargetValueLeft}
          dependencies={targetValueLeftDeps}
          validateTrigger="onBlur"
          trigger="onBlur"
        >
          <FullWidthInputNumber />
        </FormItem>
      </Col>
      <Col span={6}>{renderOperator()}</Col>
      <Col span={9}>
        <FormItem
          name="targetValueRight"
          label={t('Right value')}
          rules={rulesTargetValueRight}
          dependencies={targetValueRightDeps}
          validateTrigger="onBlur"
          trigger="onBlur"
        >
          <FullWidthInputNumber />
        </FormItem>
      </Col>
    </Row>
  ) : (
    <Row gutter={12}>
      <Col span={6}>{renderOperator()}</Col>
      <Col span={18}>
        <FormItem
          name="targetValue"
          label={t('Target value')}
          rules={rulesRequired}
        >
          <FullWidthInputNumber />
        </FormItem>
      </Col>
    </Row>
  );

export const FormattingPopoverContent = ({
  config,
  onChange,
  columns = [],
  extraColorChoices = [],
}: {
  config?: ConditionalFormattingConfig;
  onChange: (config: ConditionalFormattingConfig) => void;
  columns: { label: string; value: string }[];
  extraColorChoices?: { label: string; value: string }[];
}) => {
  const theme = useTheme();
  const colorScheme = colorSchemeOptions(theme);
  const [showOperatorFields, setShowOperatorFields] = useState(
    config === undefined ||
      (config?.colorScheme !== ColorSchemeEnum.Green &&
        config?.colorScheme !== ColorSchemeEnum.Red),
  );
  const handleChange = (event: any) => {
    setShowOperatorFields(
      !(event === ColorSchemeEnum.Green || event === ColorSchemeEnum.Red),
    );
  };

  return (
    <Form
      onFinish={onChange}
      initialValues={config}
      requiredMark="optional"
      layout="vertical"
    >
      <Row gutter={12}>
        <Col span={12}>
          <FormItem
            name="column"
            label={t('Column')}
            rules={rulesRequired}
            initialValue={columns[0]?.value}
          >
            <Select ariaLabel={t('Select column')} options={columns} />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
            name="colorScheme"
            label={t('Color scheme')}
            rules={rulesRequired}
            initialValue={colorScheme[0].value}
          >
            <Select
              onChange={event => handleChange(event)}
              ariaLabel={t('Color scheme')}
              options={[...colorScheme, ...extraColorChoices]}
            />
          </FormItem>
        </Col>
      </Row>
      <FormItem noStyle shouldUpdate={shouldFormItemUpdate}>
        {showOperatorFields ? (
          renderOperatorFields
        ) : (
          <Row gutter={12}>
            <Col span={6}>{renderOperator({ showOnlyNone: true })}</Col>
          </Row>
        )}
      </FormItem>
      <FormItem>
        <JustifyEnd>
          <Button htmlType="submit" buttonStyle="primary">
            {t('Apply')}
          </Button>
        </JustifyEnd>
      </FormItem>
    </Form>
  );
};

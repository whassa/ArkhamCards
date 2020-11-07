import React, { useCallback } from 'react';
import { Navigation } from 'react-native-navigation';
import { t } from 'ttag';
import NavButton from './NavButton';
import { SearchSelectProps } from '../cardlist/SearchMultiSelectView';
import COLORS from '@styles/colors';

interface Props {
  componentId: string;
  title: string;
  values: string[];
  onChange: (selection: string[]) => void;
  selection?: string[];
  indent?: boolean;
}

export default function ChooserButton({ componentId, title, values, onChange, selection, indent }: Props) {
  const onPress = useCallback(() => {
    Navigation.push<SearchSelectProps>(componentId, {
      component: {
        name: 'SearchFilters.Chooser',
        passProps: {
          placeholder: t`Search ${title}`,
          values,
          onChange,
          selection,
        },
        options: {
          topBar: {
            title: {
              text: t`Select ${title}`,
              color: COLORS.M,
            },
            backButton: {
              title: t`Back`,
              color: COLORS.M,
            },
            rightButtons: selection && selection.length > 0 ?
              [{
                text: t`Clear`,
                id: 'clear',
                color: COLORS.M,
                accessibilityLabel: t`Clear`,
              }] : [],
          },
        },
      },
    });
  }, [componentId, title, values, onChange, selection]);
  return (
    <NavButton
      text={`${title}: ${selection && selection.length ? selection.join(', ') : t`All`}`}
      onPress={onPress}
      indent={indent}
    />
  );
}
